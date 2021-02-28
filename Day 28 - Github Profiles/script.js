const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const getUser = async (username) => {
  try {
    const { data } = await axios(APIURL + username);
    createUserCard(data);
    getRepos(username);
    //console.log(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No profile with this username");
    }
  }
};

const createUserCard = (user) => {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>
    <div class="user-info">
    <a href="${user.html_url}" target="_blank"><h2>${user.name}</h2></a>
      <p>
        ${user.bio == null ? "Bio is not available for this user." : user.bio}
      </p>
      <ul>
        <li>${user.followers} <strong> Followers</strong></li>
        <li>${user.following} <strong> Following</strong></li>
        <li>${user.public_repos} <strong> Repos</strong></li>
      </ul>
      <div class="repos" id="repos">
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(APIURL + username + "/repos");

    addReposToCard(data);
  } catch (err) {
    console.log(err);
    if (err.response.status === 404) {
      createErrorCard("Problem fetching repos...");
    }
  }
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});

const createErrorCard = (message) => {
  const cardHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
  main.innerHTML = cardHTML;
};
