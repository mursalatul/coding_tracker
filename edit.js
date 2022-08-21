// global variables
function updateTotal()
{
    var updated_total = document.getElementById("total_input").value;
    console.log(updated_total)
    if (updated_total > 0)
    {
        document.getElementById("total").innerHTML = updated_total;
        updateRemaining();
    }
}