//4-5mb data storage use is wisely//don't have expire date
//it is present in every tab session
localStorage.setItem("name", "p");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();
//in server site we cannot access localStorage only access in client side

//4-5mb data storage use is wisely//don't have expire date
//maintain the session one tab or one session (in next tab it is not present/GONE)
//session creates with every brower tab/window of new session will created
//as soon as close the tab/window data is gone
sessionStorage.setItem("place", "pr");
sessionStorage.getItem("place");
sessionStorage.setItem("place", "pr edit");
sessionStorage.removeItem("place");
sessionStorage.clear();
//in server side we cannot access sessionStorage only access in client side

//4kb data storage use is wisely
//it have expire date cookies
document.cookie = "UserName= QWERTY; expires=26 Aug 2025 12:00:00 UTC";
document.cookie = "UserAge= 30; expires=26 Aug 2025 12:40:00 UTC";
document.cookie = "UserName= QWERTY EDIT; expires=26 Aug 2025 12:40:00 UTC";
document.cookie; //get the cookie
document.cookie = "UserName= QWERTY EDIT; expires=26 Aug 2024 12:40:00 UTC"; //delet when time expires

//it is present in both server side as well as client side(BOTH)
//it makes connection for both client and server side
//it attached to http header
