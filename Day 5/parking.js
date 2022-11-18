//write html code with prompt and alert about parking system
//the first pop up will be a prompt to ask the user's vehicle
//the 2nd one is to ask the user about their plate number
//ask the user how long the vehicle is parked in hour and min . example = "12hour 53min"
//in the end the user need to pay the parking bill 
//car : first hour will be Rp.5000, the rest is Rp.4000
//motorcycle : first hour will be Rp.3000, the rest is Rp.2000
//prompt the vehicle type, plate number, duration , and total bill 
//if the user's money less than the bill, the payment prompt won't be gone
//show the alert after they successfully paid the bill. 

// Declarations
let vehicleType = 0;
let payment = false;

// Loop the whole thing
while (true){
    // First prompt: Vehicle type
    vehicleType = prompt(`Mohon pilih jenis kendaraan:\n1. Mobil\n2. Motor`)

    // Second prompt: Registration number
    plateNumber = prompt (`Mohon masukan nomor registrasi kendaraan`)

    // Third prompt: Time
    time = prompt(`Mohon masukan waktu di parkiran dengan format: xx hour xx min`)

    // Parking fee calculations
    splitTime = time.split(" ")
    totalHours = splitTime[0];
    
    if (vehicleType == 1){
        parkingFee = 3000 + 2000 * (totalHours-1)
    }
    else if (vehicleType == 2){
        parkingFee = 5000 + 4000 * (totalHours-1)
    }

    console.log(totalHours)
    console.log(parkingFee)

    // Fourth prompt: Payment
    totalPayment = prompt(`Total biaya parkir adalah ${parkingFee}\nPembayaran?`)

    // Check payment
    if (totalPayment < parkingFee){
        alert(`Uang anda tidak cukup`)
    }
    else if (totalPayment >= parkingFee){
        alert(`Terima kasih`)
        break
    }

    // Fifth prompt: Payment status
}