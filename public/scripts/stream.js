function createStream(fields) {
    fetch(`/api/streams/`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function viewAllStreams(fields) {
    fetch('/api/streams')
        .then(showResponse)
        .catch(showResponse);
}

function viewStreamByOwner(fields) {
    fetch(`/api/streams?ownerId=${fields.ownerId}`)
      .then(showResponse)
      .catch(showResponse);
}

function addFreetToStream(fields) {
    fetch(`/api/streams/${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function captureFreet(fields) {
    fetch(`/api/streams/capture/${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function releaseFreet(fields) {
    fetch(`/api/streams/release/${fields.freetId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
}

function updateStreamParams(fields) {
  fetch(`/api/streams/streamParams`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
    .then(showResponse)
    .catch(showResponse);
}

function deleteFreetFromStream(fields) {
  fetch(`/api/streams/${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}