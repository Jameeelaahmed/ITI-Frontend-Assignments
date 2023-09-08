var newWindow;

function openNewWindow() {
    setTimeout(function() {
        newWindow = window.open("", "_blank", "width=800,height=600");
        newWindow.document.write("<h1>Long Paragraphs</h1>");
        newWindow.document.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies est quis orci finibus, non tempor ante finibus. Quisque maximus velit ac nisl tempor, a lobortis lorem tempor. Donec sagittis eros non metus facilisis, ac convallis augue cursus. In accumsan orci quis rhoncus malesuada. In hac habitasse platea dictumst. Nulla facilisi. Nullam lacinia eros leo, a tincidunt tellus pellentesque quis. Duis commodo purus vel augue commodo, vitae euismod risus luctus. Curabitur facilisis auctor nulla, in vehicula ante cursus a. Duis lobortis auctor sem, id dapibus tellus porta id. Morbi dignissim faucibus mauris, ut fringilla lorem lacinia id. Ut varius fermentum dolor, sit amet efficitur ipsum eleifend et.</p>");
        newWindow.document.write("<p>Phasellus faucibus, justo vitae ullamcorper commodo, est magna interdum ipsum, eget tincidunt quam nunc nec nibh. Suspendisse et fermentum nisi. Morbi auctor, nunc vel scelerisque dapibus, mi nunc facilisis metus, vel efficitur enim arcu a turpis. Integer id est erat. Suspendisse at convallis purus. Suspendisse potenti. Integer sollicitudin odio ut leo mattis, a malesuada sapien lacinia. Phasellus nec varius felis, sit amet luctus metus. Integer semper nulla eget sem sagittis, ac semper lacus accumsan. Cras in pretium ante, id aliquam velit.</p>");
    }, 3000);
}

function closeWindow() {
    newWindow.close();
}

function changeBackgroundColor(color) {
    if (newWindow && !newWindow.closed) {
        newWindow.document.body.style.backgroundColor = color;
    }
}