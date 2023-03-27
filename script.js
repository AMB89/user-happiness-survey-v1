// Counter object to store the number of clicks on each face
const counter = {
    happy: 0,
    normal: 0,
    sad: 0
  };
  
  function incrementCounter(face) {
    counter[face]++;
    updateCounters();
  }

  function updateCounters() {
    document.getElementById("happy-counter").textContent = counter.happy;
    document.getElementById("normal-counter").textContent = counter.normal;
    document.getElementById("sad-counter").textContent = counter.sad;
  }
  