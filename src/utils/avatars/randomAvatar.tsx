export const randomAvatar = (arrayAvatar: string[]) => {
  const random = Math.floor(Math.random() * arrayAvatar.length);
  return arrayAvatar[random];
};
