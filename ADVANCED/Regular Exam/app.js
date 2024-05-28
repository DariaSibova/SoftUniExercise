window.addEventListener("load", solve);

function solve() {
  const formEl = document.querySelector("form");
  const snowmanNameInput = document.querySelector("#snowman-name");
  const snowmanHeightInput = document.querySelector("#snowman-height");
  const locationInput = document.querySelector("#location");
  const creatorNameInput = document.querySelector("#creator-name");
  const specialAttributeSelect = document.querySelector("#special-attribute");
  const addButton = document.querySelector(".add-btn");
  const snowmanPreviewEl = document.querySelector(".snowman-preview");
  const snowListEl = document.querySelector(".snow-list");
  let snowmanPreviewList = [];
  let snowList = [];
  let snowman = {};

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      !snowmanNameInput.value ||
      !snowmanHeightInput.value ||
      !locationInput.value ||
      !creatorNameInput.value ||
      !specialAttributeSelect.value
    ) {
      return;
    }

    snowman = {
      snowmanName: snowmanNameInput.value,
      snowmanHeight: snowmanHeightInput.value,
      location: locationInput.value,
      creatorName: creatorNameInput.value,
      specialAttribute: specialAttributeSelect.value,
    };

    snowmanPreviewList.push(snowman);
    formEl.reset();
    addButton.disabled = true;

    const snowmanPreviewListHtml = snowmanPreviewList.map((snowman) => {
      return `<li class="snowman-info">
                <article>
                  <p>Name: ${snowman.snowmanName}</p>
                  <p>Height: ${snowman.snowmanHeight}</p>
                  <p>Location: ${snowman.location}</p>
                  <p>Creator: ${snowman.creatorName}</p>
                  <p>Attribute: ${snowman.specialAttribute}</p>
                </article>
                <div class="btn-container">
                  <button class="edit-btn">Edit</button>
                  <button class="next-btn">Next</button>
                </div>
              </li>`;
    });
    snowmanPreviewEl.innerHTML = snowmanPreviewListHtml;

    const editButton = document.querySelector(".edit-btn");

    editButton.addEventListener("click", () => {
      snowmanPreviewEl.innerHTML = "";
      snowmanNameInput.value = snowman.snowmanName;
      snowmanHeightInput.value = snowman.snowmanHeight;
      locationInput.value = snowman.location;
      creatorNameInput.value = snowman.creatorName;
      specialAttributeSelect.value = snowman.specialAttribute;
      addButton.disabled = false;
      snowmanPreviewList = [];
    });

    const nextButton = document.querySelector(".next-btn");

    nextButton.addEventListener("click", () => {
      snowList.push(snowman);

      const snowListHtml = snowList.map((snowman) => {
        return `<li class="snowman-content">
                  <article>
                    <p>Name: ${snowman.snowmanName}</p>
                    <p>Height: ${snowman.snowmanHeight}</p>
                    <p>Location: ${snowman.location}</p>
                    <p>Creator: ${snowman.creatorName}</p>
                    <p>Attribute: ${snowman.specialAttribute}</p>
                    <button class="send-btn">Send</button>
                  </article>
                </li>`;
      });
      snowListEl.innerHTML = snowListHtml;

      const sendButton = document.querySelector(".send-btn");

      sendButton.addEventListener("click", () => {
        document.querySelector("main").innerHTML = "";
        const imgEl = document.createElement('img')
        imgEl.id = "back-img"
        document.body.append(imgEl)

      });
    });
  });
}
