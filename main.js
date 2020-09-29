
const searchUser = document.getElementById('searchUser');




const listRepos = async username => {
     const repos = await fetch(
         `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
     )
     .then(res => res.json())
     .catch(error => console.error(error));
     
     const markup = repos
       .map(
           repo => `
           
               <li>
              <a href = "${repo.html_url}">${repo.name}</a>
                (🌟 ${repo.stargazers_count})
               </li>
           `
       )
        .join('');

        const content = document.getElementById('content');

        content.innerHTML = `<ul>${markup}</ul>`;

        
        

}


searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
  
    if(userText !== ''){
     // Make http call
     listRepos(userText)

    } else {
        content.innerHTML = '';
    }
  }); 

// listRepos('ObayuwanaPaul');



