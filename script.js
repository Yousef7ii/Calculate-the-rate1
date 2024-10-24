function calculateGPA() {
    // جلب المدخلات
    let grade1 = parseFloat(document.getElementById('grade1').value);
    let credits1 = parseFloat(document.getElementById('credits1').value);
    let grade2 = parseFloat(document.getElementById('grade2').value);
    let credits2 = parseFloat(document.getElementById('credits2').value);

    // حساب المعدل التراكمي
    let totalPoints = (grade1 * credits1) + (grade2 * credits2);
    let totalCredits = credits1 + credits2;
    let gpa = totalPoints / totalCredits;

    // عرض النتيجة
    document.getElementById('result').innerHTML = `المعدل: ${gpa.toFixed(2)}`;
}
