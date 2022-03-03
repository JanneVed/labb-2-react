async function GetRepo()
{
    let response = await fetch('https://api.github.com/users/JanneVed/repos');
    let data = await response.json();
    // Project 1
    document.querySelector(".first-project-name").innerHTML = data[3].name;
    let a = document.querySelector(".first-project-name");
    a.setAttribute("href", data[3].html_url);
    document.querySelector(".first-project-desc").innerHTML = data[3].description;

    // project 2
    document.querySelector(".second-project-name").innerHTML = data[0].name;
    a = document.querySelector(".second-project-name");
    a.setAttribute("href", data[0].html_url);
    document.querySelector(".second-project-desc").innerHTML = data[0].description;
};
GetRepo();
