function getTaimer(time) {
    let count = time * 60
    let n = 61

    const idInterval = setInterval(() => {
        let sec = count % 60
        let min = Math.floor(count / 60)
        document.querySelector('.time').textContent = `${ formaterDate(min)}:${formaterDate(sec)}`
        count -= 1
        --n
        if (!n) {
            setTimeout(() => {
                alert('На 1 минуту стало меньше!')
                n = 60
            })
        }
        if (count < 0) {
            clearInterval(idInterval)
            alert('Время вышло!!!')
        }

    }, 100)

}

function formaterDate(time) {
    if (time <= 9) {
        return time = `0${time}`
    }else{
        return time
    }
}
getTaimer(5)

