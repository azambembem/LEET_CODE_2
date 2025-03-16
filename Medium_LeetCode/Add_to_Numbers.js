// Linked list tuguni (node) yaratish uchun oddiy funksiya
function ListNode(value) {
  this.val = value; // Node qiymati
  this.next = null; // Keyingi node
}

// Ikki sonni qo‘shadigan funksiya
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0); // Boshlang‘ich node (yordamchi)
  let current = dummy; // Harakatlanuvchi ko‘rsatkich
  let carry = 0; // Qo‘shimcha raqam (10 dan oshganda)

  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry; // Qo‘shiladigan sonni saqlaymiz

    if (l1 !== null) {
      // Agar l1 bor bo‘lsa
      sum += l1.val; // Uning qiymatini qo‘shamiz
      l1 = l1.next; // Keyingi node'ga o‘tamiz
    }

    if (l2 !== null) {
      // Agar l2 bor bo‘lsa
      sum += l2.val; // Uning qiymatini qo‘shamiz
      l2 = l2.next; // Keyingi node'ga o‘tamiz
    }

    carry = Math.floor(sum / 10); // 10 dan katta bo‘lsa, yodda saqlaymiz
    current.next = new ListNode(sum % 10); // Faqat oxirgi raqamni olamiz
    current = current.next; // Keyingi node'ga o‘tamiz
  }

  return dummy.next; // Natijani qaytaramiz
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3); // 342

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4); // 465

let result = addTwoNumbers(l1, l2); // 342 + 465 = 807

while (result !== null) {
  console.log(result.val); // 7 -> 0 -> 8
  result = result.next;
}
