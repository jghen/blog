import {SAMPLE_POSTS} from '../data/posts.js';

const elPosts = document.getElementById('posts')
const elTopPost = document.getElementById('top-post')
const elTopPostImage = document.getElementById('top-post-image')

const createTopPostImage = () => {
  return (
    elTopPostImage.innerHTML = `
      <img 
        src="${SAMPLE_POSTS[0].photo}" 
        class="img-fluid rounded-2" 
        alt="cover"
      > 
    `
  );
}

createTopPostImage();

const createTopPost = (elTopPost) => {
  const topPostObj = SAMPLE_POSTS[0];
  
  return (
    elTopPost.innerHTML = `
      <header>
        <b class="card-text fs-6 text-uppercase text-muted">
          ${topPostObj.date}
        </b>
      </header>
      <h2 class="card-title mt-4 fw-bolder">
        ${topPostObj.title}
      </h2>
      <h4 class="card-text mb-4 text-muted fw-bolder">
        ${topPostObj.subTitle}
      </h4>
      <p class="card-text">
        ${topPostObj.intro}
      </p>
      <div class="d-flex align-items-center text-muted">
        <i class="bi bi-person-fill card-text fs-5"></i>
        <p class="card-text fs-6">${topPostObj.author}</p>
      </div>
      <footer class="d-flex align-items-center my-2">
        <p class="badge bg-primary">${topPostObj.tags[0]}</p>
        <p class="badge bg-primary mx-1">${topPostObj.tags[1]}</p>
        <p class="badge bg-primary">${topPostObj.tags[2]}</p>
      </footer>
    `
  );
}

createTopPost(elTopPost);

const createTags = (tagNames) => {
  let tagElements = ``;
  for (const tag in tagNames) {
    tagElements += `<p class="badge bg-primary mx-1">${tagNames[tag]}</p>`
  }
  return tagElements;
}

elPosts.classList.add('grid');

const createPost = (postId, postObj) => {
  const newCard = document.createElement('article');
  newCard.classList.add('card', 'rounded-2', 'shadow', 'bg-white');
  elPosts.appendChild(newCard);
  
  return (
    newCard.innerHTML = `
      <img src="${postObj.photo}" class="card-img-top rounded-top w-100 " alt="food">
      <div class="card-body card-body-${postId}">
        <header>
          <b class="card-text fs-6 text-uppercase text-muted">
            ${postObj.date}
          </b>
        </header>
        <h2 class="card-title mt-4 fw-bolder">
          ${postObj.title}
        </h1>
        <h4 class="card-text mb-4 text-muted fw-bolder">
          ${postObj.subTitle}
        </h4>
        <p class="card-text">
          ${postObj.intro}
        </p>
        <div class="d-flex align-items-center text-muted">
          <i class="bi bi-person-fill card-text fs-5"></i>
          <p class="card-text fs-6">${postObj.author}</p>
        </div>
        <footer id="footer-${postId}" class="d-flex align-items-center my-2">
          ${createTags(postObj.tags)}
        </footer>
      </div>
    `
  );
}

const posts = SAMPLE_POSTS;
posts.shift();

posts.map(post=>createPost(post.id, post));
