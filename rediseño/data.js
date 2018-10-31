const array=[];

const getData= async () => {
    const res = await fetch("./data/data.json")
    return res.json()
}


