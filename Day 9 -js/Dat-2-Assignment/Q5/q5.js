let arr=[
    {
        name:"jam",
        degree:"first",
    },
    {
        name:"aya",
        degree:"second",
    },
    {
        name:"shaimaa",
        degree:"third",
    },
    {
        name:"doha",
        degree:"fourth",
    }];

    arr.push({name:"hayam",degree:"fifth"});

    console.log(arr);

    arr.pop();

    console.log(arr);

    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }