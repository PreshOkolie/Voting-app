const voting = document.querySelector('#voting');
const voteCount = document.querySelector('#vote-count');
const paragraph = document.querySelector('paragraph')
const params = new URLSearchParams(window.location.search);
params.forEach((value, key)=>{
    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.querySelector('br'))
});


let voteCounts = [0, 0, 0, 0, 0]; // initialize vote counts for each candidate

function vote() {
  const candidates = document.getElementById("candidates");
  const selectedCandidate = candidates.options[candidates.selectedIndex].value - 1; // This gets the index of the selected candidate
  
  voteCounts[selectedCandidate]++; // This increases the vote for a selected candidate
  
  const voteCountElement = document.getElementById("vote-count");
  voteCountElement.textContent = "Current vote count: " + voteCounts[selectedCandidate];
}



let peter = 0;
let atiku = 0;
let wike = 0;
let rabiu = 0;
let dumo = 0;

function openVote(candidate) {
	if (candidate === 1) {
		peter++;
		document.getElementById("candidate1-votes").innerText = peter;
	} else if (candidate === 2) {
		atiku++;
		document.getElementById("candidate2-votes").innerText = atiku;
	}
}



