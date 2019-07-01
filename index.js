"use strict";

function main() {
  const molecule1 = document.getElementById('molecule-1');
  const molecule2 = document.getElementById('molecule-2');
  const select1 = document.getElementById('select-1');
  const select2 = document.getElementById('select-2');

  function onMoleculeChange(molecule) {
    return function(e) {
      molecule.src = e.target.value;
    }
  }

  select1.addEventListener('change', onMoleculeChange(molecule1));
  select2.addEventListener('change', onMoleculeChange(molecule2));

  molecule1.src = select1.value;
  molecule2.src = select2.value;
}

window.addEventListener('load', main);
