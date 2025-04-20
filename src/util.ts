export function toggleBodyOverflow(value?: boolean) {
  if (!value) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
}
