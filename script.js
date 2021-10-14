let nonVegMenu=[
    {name: "Spcl.Chicken Thali", Price: 300, desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Fish Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Crab Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"}
]

let VegMenu=[
    {name: "Masvadi Thali", Price: 300, desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "pithla bhakar", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Mutton Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"},
    {name: "Spcl.Crab Thali", Price: 300,desc:"Unlimited rassa, Bhakari, Rice"}
]

// non veg menu function
function loadNonVegMenu(nonVegMenu){
    body = document.getElementById('nonveg');
    data = '';
    
    for(let menu of nonVegMenu){
        data += `
        <!-- card start -->
        <div class="menu-card col-12 col-md-6 col-lg-3 text-center">
                    <div class="card-content bg-white">
                    <div class="img-box mb-2">
                    <img src="https://im.whatshot.in/img/2018/Aug/nonvegthali-cropped-2-1533297391.jpg" class="img-fluid" alt="">
                    </div>
                    <h2 class="fs-4 fw-bold">${menu.name}</h2>
                    <small class="text-muted"> [${menu.desc}]</small>
                        
                    <div class="d-flex justify-content-between align-items-center px-3 py-2">
                    <div>
                    <span class="border border-dark p-1 me-3"><i class="fas fa-circle text-danger"></i></span>
                    <span class="text-success">&#8377;${menu.Price}</span>
                    </div>
                            <input type="button" value="Order" class="btn border rounded-0">
                            </div>
                            </div>
                </div>
                <!-- card end -->
                `
                console.log(data)
                body.innerHTML = data;
            }
}

loadNonVegMenu(nonVegMenu);
// veg menu function


function loadVegMenu(VegMenu){
    body = document.getElementById('veg');
    data = '';

    for(let menu of VegMenu){
        data += `
        <!-- card start -->
                <div class="menu-card col-12 col-md-6 col-lg-3 text-center">
                    <div class="card-content bg-white">
                    
                        <div class="img-box mb-2">
                        <img src="https://im.whatshot.in/img/2018/Aug/nonvegthali-cropped-2-1533297391.jpg" class="img-fluid" alt="">
                    </div>
                    <h2 class="fs-4 fw-bold">${menu.name}</h2>
                       <small class="text-muted"> [${menu.desc}]</small>
                        
                       <div class="d-flex justify-content-between align-items-center px-3 py-2">
                            <div>
                                <span class="border border-dark p-1 me-3"><i class="fas fa-circle text-success"></i></span>
                                <span class="text-success">&#8377;${menu.Price}</span>
                            </div>
                            <input type="button" value="Order" class="btn border rounded-0">
                        </div>
                    </div>
                </div>
                <!-- card end -->
        `
        console.log(data)
        body.innerHTML = data;
    }
}

loadVegMenu(VegMenu)