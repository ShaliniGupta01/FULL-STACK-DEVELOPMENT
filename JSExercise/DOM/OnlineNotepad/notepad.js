 const textarea = document.getElementById('textarea');
    const featureFlag = document.getElementById('feature-flag');
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');
    // const darkModeToggle = document.getElementById('dark-mode');
    const STORAGE_KEY = "autosave-data";

    // Load saved notes if available
    window.addEventListener("load", () => {
      const savedText = localStorage.getItem(STORAGE_KEY);
      if (savedText) {
        textarea.value = savedText;
      }
      featureFlag.checked = false; // feature-flag is unchecked by default
    });

    // Autosave every 1 second when checkbox is checked
    setInterval(() => {
      if (featureFlag.checked) {
        localStorage.setItem(STORAGE_KEY, textarea.value);
      }
    }, 1000);

    // Manual Save
    saveButton.addEventListener("click", () => {
      if (featureFlag.checked) {
        localStorage.setItem(STORAGE_KEY, textarea.value);
        alert("Notes saved!");
      } else {
        alert("Enable 'Save My Code' to allow saving.");
      }
    });

    // Clear notes
    clearButton.addEventListener("click", () => {
      textarea.value = "";
      localStorage.removeItem(STORAGE_KEY);
    });

    // Dark mode toggle
    // darkModeToggle.addEventListener("change", () => {
    //   document.body.classList.toggle("dark-theme");
    // });