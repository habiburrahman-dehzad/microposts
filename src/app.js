import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);
document.querySelector('#posts').addEventListener('click', deletePost);
document.querySelector('#posts').addEventListener('click', enableEdit);
document.querySelector('.card-form').addEventListener('click', cancelEdit);

async function getPosts() {
  try {
    const posts = await http.get('http://localhost:3000/posts');
    ui.showPosts(posts);
  } catch (err) {
    console.error(err);
  }
}

async function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  if (!body || !title) {
    ui.showAlert('Please add title and body', 'alert alert-danger');
    return;
  }

  const data = {
    title,
    body,
  };

  if (!id) {
    // Create new post
    try {
      await http.post('http://localhost:3000/posts', data);
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    } catch (err) {
      console.error(err);
    }
  } else {
    // update existing post
    try {
      await http.put(`http://localhost:3000/posts/${id}`, data);
      ui.showAlert('Post updated', 'alert alert-success');
      ui.changeFormState('add');
      getPosts();
    } catch (err) {
      console.error(err);
    }
  }

  e.preventDefault();
}

async function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      try {
        await http.delete(`http://localhost:3000/posts/${id}`);
        ui.showAlert('Post removed', 'alert alert-success');
        getPosts();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;

    const data = {
      id,
      title,
      body,
    };

    ui.fillForm(data);
  }
}

function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}
