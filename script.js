function see() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }
    

    const lovePercentage = Math.floor(Math.random() * 101);
   

    const result = `${lovePercentage}%`;
    document.getElementById('show').innerHTML = result;

    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';
}
