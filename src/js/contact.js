export default function contact (sectionId) {
    const contactSection = document.createElement("div");
    contactSection.classList.add("tab");
    contactSection.id = sectionId;
    contactSection.textContent = "Contact";
    return contactSection;
}