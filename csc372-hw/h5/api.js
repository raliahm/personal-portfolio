async function getUser() {
  const username = document.getElementById("username").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const reposUrl = `https://api.github.com/users/${username}/repos?per_page=20`;

  try {
    const response = await fetch(reposUrl);

    if (!response.ok) {
      throw new Error("User not found or GitHub API rate limit exceeded.");
    }

    const repos = await response.json();

    repos.forEach(async (repo) => {
      try {
        const [langRes, commitsRes] = await Promise.all([
          fetch(repo.languages_url),
          fetch(repo.commits_url.replace('{/sha}', ''))
        ]);

        const languages = await langRes.json();
        const commits = await commitsRes.json();

        const card = document.createElement("div");
        card.className = "card";
        card.style.border = "1px solid #ccc";
        card.style.margin = "10px 0";
        card.style.padding = "15px";
        card.style.borderRadius = "8px";

        card.innerHTML = `
          <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
          <ul>
            <li><strong>Description:</strong> ${repo.description || 'No description'}</li>
            <li><strong>Created at:</strong> ${new Date(repo.created_at).toLocaleDateString()}</li>
            <li><strong>Updated at:</strong> ${new Date(repo.updated_at).toLocaleDateString()}</li>
            <li><strong>Commits (first page):</strong> ${Array.isArray(commits) ? commits.length : 'N/A'}</li>
            <li><strong>Languages:</strong> ${Object.keys(languages).join(', ') || 'None'}</li>
            <li><strong>Watchers:</strong> ${repo.watchers_count}</li>
          </ul>`;

        resultDiv.appendChild(card);
      } catch (innerError) {
        console.error("Error processing repo:", repo.name, innerError);
      }
    });
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}

getUser();