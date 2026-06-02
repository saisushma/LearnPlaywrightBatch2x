let isLoggedIn = true;

//viewer,editor,admin

let userRole ="Editor";
if(isLoggedIn){
    if(userRole === "admin"){
        console.log("admin can do all the things");
    }else if(userRole === "Editor"){
        console.log("welcome Editor - edit access granted")
    } else if(userRole === "Viewer"){
        console.log("welcome Viewer - Read only access granted")
    } else{
        console.log("No idea you may be a guest role..!!");
    }
}
