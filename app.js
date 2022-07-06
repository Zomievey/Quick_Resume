const hayleeHunter = {
  from: "Birmingham, AL",
  school: "Innovate Birmingham",
  certificate: "Web Development",
  year: "2021",
  githubLink: "https://github.com/Zomievey",
  github: "Click HERE!",
  email: "hayleehunter85@gmail.com",
};

function displayCredentials() {
  const { from, school, certificate, year, githubLink } = hayleeHunter;
  console.log(`I am currently living in ${from}. 
I graduated from ${school} 
in ${year} with a ${certificate} certification. 
My GitHub is ${githubLink}`);
}

displayCredentials();

const newHire = document.querySelector(".new-hire");
newHire.innerHTML = `
      <h2>I am currently living in ${hayleeHunter.from}.</h2>
      <h3> I graduated from ${hayleeHunter.school} with a </h3>
      <h4>${hayleeHunter.certificate} certification in ${hayleeHunter.year}.</h4>
      <h5>My GitHub is:</h5>
      <h2> 
      <a href="https://github.com/Zomievey" target="_blank">${hayleeHunter.github}</a></h2>
      <h1>Email: ${hayleeHunter.email}</h1>
    `;
