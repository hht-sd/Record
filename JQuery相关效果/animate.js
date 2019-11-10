$(document).ready(function() {
    $('#bt1').click(function() {
        $('.animate1').animate({
            left: '200px',
            height: '200px',
            width: '200px'
        }, 1000, changeColorFuc)
    })
})

function changeColorFuc() {
    $(function() {
        $('.animate1').css({
            background: "rgb(228, 202, 184)"
        })
    })
}

$(document).ready(function() {
    $('#bt2').click(function() {
        $('.animate2').animate({
            height: 'toggle',
            width: 'toggle'
        }, 1000)
    })
})

$(function() {
    $('#bt3').click(function() {
        $('.animate3').animate({
            top: '50px',
        }, 500, changeColorFuc2)
        $('.animate3').animate({
            left: '50px',
        }, 500, changeColorFuc3)
        $('.animate3').animate({
            top: '0px',
        }, 500, changeColorFuc2)
        $('.animate3').animate({
            left: '0px',
        }, 500, changeColorFuc3)
    })
})

function changeColorFuc2() {
    $('.animate3').css({
        background: 'blue',
    })
}

function changeColorFuc3() {
    $('.animate3').css({
        background: 'chocolate',
    })
}