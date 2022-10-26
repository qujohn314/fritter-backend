function createReaction(fields) {
    console.log('creating reaction');
    fetch(`/api/reactions/`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function viewReactionsByAuthor(fields) {
    fetch(`/api/reactions?author=${fields.author}`)
      .then(showResponse)
      .catch(showResponse);
}

function viewReactionsByFreet(fields) {
    fetch(`/api/reactions?itemId=${fields.freetId}&itemType=Freet`)
      .then(showResponse)
      .catch(showResponse);
}

function viewReactionsByComment(fields) {
    fetch(`/api/reactions?itemId=${fields.commentId}&itemType=Comment`)
      .then(showResponse)
      .catch(showResponse);
  }

function viewAllReactions(fields) {
fetch('/api/reactions')
    .then(showResponse)
    .catch(showResponse);
}

function deleteReaction(fields) {
  fetch(`/api/reactions/${fields.reactionId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}

function updateReaction(fields) {
  fetch(`/api/reactions/${fields.reactionId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}