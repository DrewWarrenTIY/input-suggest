var domainList = ['drew.daplie.me', 'test.daplie.me'];
var arrayIteration = 0;
var stableVal = '';

console.log(domainList);

// Disable form submit
$('.domainForm').submit(function(ev) {
  ev.preventDefault();
  return false;
});

// Key up functions
$('body').on('keyup', '.shownInput', function (ev) {
  var val = this.value;
  if (ev.keyCode >= 65 && ev.keyCode <= 90) {
    stableVal = this.value;
    $('.hiddenInput').val($('.shownInput').val());
  }
  if (ev.keyCode === 190) {
    stableVal = stableVal + '.';
    this.value = val + domainList[arrayIteration];
    setCursorPosition("myBox", this.value.length - domainList[arrayIteration].length)
    cycleArrayIteration(arrayIteration);
  }
  if (ev.keyCode === 16) {
    this.value = stableVal + domainList[arrayIteration];
    cycleArrayIteration(arrayIteration);
  }
});


// Set the Cursor Position when auto-filling suggestion
function setCursorPosition(elemId, cursorPos) {
  var el = document.getElementById(elemId);

  el.value = el.value;

  if (el !== null) {
    if (el.createTextRange) {
      range.move('character', cursorPos);
      range.select();
      return true;
    }
    else {
      if (el.selectionStart || el.selectionStart === 0) {
        el.focus();
        el.setSelectionRange(cursorPos, cursorPos);
        return true;
      }
      else {
        el.focus();
        return false;
      }
    }
  }
}

function cycleArrayIteration(iteration) {
  if (iteration === domainList.length - 1) {
    arrayIteration = 0;
  } else {
    arrayIteration += 1;
  }
}



// KEY CODES:
// 190 = .
// 13 = enter
// 9 = tab
// 16 = shift
