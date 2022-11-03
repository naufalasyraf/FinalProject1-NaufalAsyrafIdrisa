function allData() {

    table.innerHTML = ``

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []


    contactList.forEach(function (value, i) {

        var table = document.getElementById('table')

        table.innerHTML += `
        <a class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${value.judul}</h5>
            <small>${value.tanggal}</small>
          </div>
          <small>${value.deskripsi}</small>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
        </a>
        <hr>`
    })
}




function save() {

    const judul = document.getElementById('judul').value


    if (judul === "") {
        alert('Judul tidak boleh kosong');
        return;
    }

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if (document.getElementById('id').value) {


        contactList.forEach(value => {
            if (document.getElementById('id').value == value.id) {
                value.judul = document.getElementById('judul').value,
                    value.tanggal = document.getElementById('tanggal').value,
                    value.deskripsi = document.getElementById('deskripsi').value
            }
        });


        document.getElementById('id').value = ''

    } else {


        var item = {
            id: id + 1,
            judul: document.getElementById('judul').value,
            tanggal: document.getElementById('tanggal').value,
            deskripsi: document.getElementById('deskripsi').value
        }


        contactList.push(item)
    }


    localStorage.setItem('listItem', JSON.stringify(contactList))


    allData()


    document.getElementById('form').reset()
}

function find(id) {

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value) {
        if (value.id == id) {
            document.getElementById('id').value = value.id
            document.getElementById('judul').value = value.judul
            document.getElementById('tanggal').value = value.tanggal
            document.getElementById('deskripsi').value = value.deskripsi
        }
    })
}

function removeData(id) {

    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList = contactList.filter(function (value) {
        return value.id != id;
    });

    localStorage.setItem('listItem', JSON.stringify(contactList))

    allData()
}