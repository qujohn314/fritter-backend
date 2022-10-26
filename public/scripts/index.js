// Show an object on the screen.
function showObject(obj) {
  const pre = document.getElementById('response');
  const preParent = pre.parentElement;
  pre.innerText = JSON.stringify(obj, null, 4);
  preParent.classList.add('flashing');
  setTimeout(() => {
    preParent.classList.remove('flashing');
  }, 300);
}

function showResponse(response) {
  response.json().then(data => {
    showObject({
      data,
      status: response.status,
      statusText: response.statusText
    });
  });
}

/**
 * IT IS UNLIKELY THAT YOU WILL WANT TO EDIT THE CODE ABOVE.
 * EDIT THE CODE BELOW TO SEND REQUESTS TO YOUR API.
 *
 * Native browser Fetch API documentation to fetch resources: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

// Map form (by id) to the function that should be called on submit
const formsAndHandlers = {
  'create-user': createUser,
  'delete-user': deleteUser,
  'change-username': changeUsername,
  'change-password': changePassword,
  'sign-in': signIn,
  'sign-out': signOut,
  'enable-silent-mode' : enableSilentMode,
  'enable-silent-reactions' : enableSilentReactions,
  'enable-silent-comments' : enableSilentComments,
  'disable-silent-mode' : disableSilentMode,
  'disable-silent-reactions' : disableSilentReactions,
  'disable-silent-comments' : disableSilentComments,
  'view-all-freets': viewAllFreets,
  'view-freets-by-author': viewFreetsByAuthor,
  'create-freet': createFreet,
  'delete-freet': deleteFreet,
  'create-comment': createComment,
  'create-reaction': createReaction,
  'view-comments-by-author': viewCommentsByAuthor,
  'view-comments-by-freet': viewCommentsByFreet,
  'view-all-comments': viewAllComments,
  'delete-comment': deleteComment,
  'view-reactions-by-freet': viewReactionsByFreet,
  'view-reactions-by-author': viewReactionsByAuthor,
  'view-reactions-by-comment': viewReactionsByComment,
  'view-all-reactions': viewAllReactions,
  'delete-reaction' : deleteReaction,
  'update-reaction' : updateReaction,
  'create-stream' : createStream,
  'view-all-streams' : viewAllStreams,
  'view-stream-by-owner' : viewStreamByOwner,
  'add-freet-to-stream' : addFreetToStream,
  'release-freet' : releaseFreet,
  'capture-freet' : captureFreet,
  'delete-freet-from-stream' : deleteFreetFromStream,
  'update-stream-params' : updateStreamParams
};

// Attach handlers to forms
function init() {
  Object.entries(formsAndHandlers).forEach(([formID, handler]) => {
    const form = document.getElementById(formID);
    form.onsubmit = e => {
      e.preventDefault();
      const formData = new FormData(form);
      handler(Object.fromEntries(formData.entries()));
      return false; // Don't reload page
    };
  });
}

// Attach handlers once DOM is ready
window.onload = init;
