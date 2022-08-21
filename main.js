// global variables
let total, completed, remaining;

function updateRemaining()
{
    total = document.getElementById("total").textContent;
    completed = document.getElementById("completed").textContent;
    remaining = document.getElementById("remaining");   
    remaining.innerHTML = parseInt(total) - parseInt(completed);
}

// updating completed list
function updateCompleted()
{
    var updated_completed = document.getElementById("completed_input").value;
    if (updated_completed > 0)
    {
        document.getElementById("completed").innerHTML = updated_completed;
        updateRemaining();
    }
}

updateRemaining();