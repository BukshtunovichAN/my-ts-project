export  enum UserRole {
 admin = 'admin' ,
 editor = 'editor' ,
 guest = 'guest' ,
}


// Замените следующий код на версию с помощью Record 
const RoleDescription: Record<UserRole, string> = {
    [ UserRole.admin]: 'Admin User' ,
      [UserRole.editor]: 'Editor User' ,
    [UserRole.guest]: 'Guest User' ,
};
console.log(RoleDescription);
export {};