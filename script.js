document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        
        // Get form data
        const formData = new FormData(form);
        const feeType = formData.get("feeType");
        const studentName = formData.get("studentName");
        const fatherName = formData.get("fatherName");
        const registrationNo = formData.get("registrationNo");
        const classRollNo = formData.get("classRollNo");
        const mobileNo = formData.get("mobileNo");
        const batch = formData.get("batch");
        const semester = formData.get("semester");
        const category = formData.get("category");
        const examinationFee = formData.get("examinationfee");
        const registrationFee = formData.get("registrationfee");
        const tuitionFee = formData.get("tuitionfee");
        const developmentFee = formData.get("developmentfee");
        const otherFee = formData.get("otherfee");
        const remarks = formData.get("remarks");

        // Generate Payment URL
        const paymentURL = `https://yourpaymentgateway.com/pay?feeType=${encodeURIComponent(feeType)}&studentName=${encodeURIComponent(studentName)}&fatherName=${encodeURIComponent(fatherName)}&registrationNo=${encodeURIComponent(registrationNo)}&classRollNo=${encodeURIComponent(classRollNo)}&mobileNo=${encodeURIComponent(mobileNo)}&batch=${encodeURIComponent(batch)}&semester=${encodeURIComponent(semester)}&category=${encodeURIComponent(category)}&examinationFee=${encodeURIComponent(examinationFee)}&registrationFee=${encodeURIComponent(registrationFee)}&tuitionFee=${encodeURIComponent(tuitionFee)}&developmentFee=${encodeURIComponent(developmentFee)}&otherFee=${encodeURIComponent(otherFee)}&remarks=${encodeURIComponent(remarks)}`;

        // Display Payment URL
        alert(`Payment URL generated: \n${paymentURL}`);
        console.log(`Payment URL: ${paymentURL}`);
    });
});
if (!/^\d{10}$/.test(mobileNo)) {
    alert("Please enter a valid 10-digit mobile number.");
    return;
}

window.location.href = paymentURLhttps//www.onlinesbi.sbi/sbicollect/payment/listinstitution.htm;
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);
        const feeType = formData.get("feeType");
        const studentName = formData.get("studentName");
        const fatherName = formData.get("fatherName");
        const registrationNo = formData.get("registrationNo");
        const classRollNo = formData.get("classRollNo");
        const mobileNo = formData.get("mobileNo");
        const batch = formData.get("batch");
        const semester = formData.get("semester");
        const category = formData.get("category");
        const examinationFee = formData.get("examinationfee");
        const registrationFee = formData.get("registrationfee");
        const tuitionFee = formData.get("tuitionfee");
        const developmentFee = formData.get("developmentfee");
        const otherFee = formData.get("otherfee");
        const remarks = formData.get("remarks");

        // Generate SBI Collect URL with Parameters
        const paymentURL = `https://www.onlinesbi.sbi/sbicollect/payment/listinstitution.htm?` +
            `feeType=${encodeURIComponent(feeType)}&studentName=${encodeURIComponent(studentName)}&fatherName=${encodeURIComponent(fatherName)}&registrationNo=${encodeURIComponent(registrationNo)}&classRollNo=${encodeURIComponent(classRollNo)}&mobileNo=${encodeURIComponent(mobileNo)}&batch=${encodeURIComponent(batch)}&semester=${encodeURIComponent(semester)}&category=${encodeURIComponent(category)}&examinationFee=${encodeURIComponent(examinationFee)}&registrationFee=${encodeURIComponent(registrationFee)}&tuitionFee=${encodeURIComponent(tuitionFee)}&developmentFee=${encodeURIComponent(developmentFee)}&otherFee=${encodeURIComponent(otherFee)}&remarks=${encodeURIComponent(remarks)}`;

        // Open the Payment URL in a new tab
        window.open(paymentURL, '_blank');
    });
});

