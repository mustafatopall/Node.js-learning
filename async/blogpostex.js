const posts = [
    {name : "post1"},
    {name : "post2"},
    {name : "post3"},
    {name : "post4"},
    {name : "post5"},
    {name : "post6"}
]

const listpost = () => {
    posts.map((post)=>{
        console.log(post.name);
    })
}

const addpost = (post) => {
    posts.push(post);
}

async function newlistpost(newpost){
    const add = await addpost(newpost);
    listpost();
}

newlistpost({name:"post10"});