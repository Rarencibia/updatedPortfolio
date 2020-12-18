async function getData(){
    let fetchData = await fetch('skills.json');
    let data = await fetchData.json();

    console.log(data);
}

getData();