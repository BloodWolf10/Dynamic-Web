function myFunction() {
    // Get the first <style> element
    let styleElement = document.getElementsByTagName("style")[0];

    // Get the innerHTML of the <style> element
    let styleContent = styleElement.innerHTML;

    // Append the style content to the paragraph with id "demo"
    document.getElementById("demo").innerHTML = styleContent;
  }