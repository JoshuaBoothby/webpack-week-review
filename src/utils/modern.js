export function fancyHello(user) {
  const getName = (u) => u?.name ?? "friend";
  return `Hello, ${getName(user)}`;
}
