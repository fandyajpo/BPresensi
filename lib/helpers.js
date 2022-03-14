export function scrollTo(ref) {
  window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
}

export async function signOut() {
  await fetch("/api/logout", { method: "POST" });
}
