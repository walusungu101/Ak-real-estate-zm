async function loadProperties() {
  const container = document.getElementById('property-list');
  const files = ['babysitter.md']; // Add more markdown files here

  const converter = new showdown.Converter();

  for (const file of files) {
    const response = await fetch(`/properties/${file}`);
    const content = await response.text();

    const parts = content.split('---');
    const markdownBody = parts[2]; // After frontmatter
    const html = converter.makeHtml(markdownBody);

    container.innerHTML += `<div class="property">${html}</div>`;
  }
}

loadProperties();

