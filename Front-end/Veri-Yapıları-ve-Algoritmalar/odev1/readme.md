Insertion sort
1.Soru: [22,27,16,2,18,6] Dizinin sort aşamalarını yazınız.

En küçük eleman bulunur ve ilk elemanla yeri değiştirilir. 
Her adım da bir diğer eleman geçerek aynı işlem sıralama doğru olana kadar uygulanır. 
En küçük elemanımız 2 olduğu için ilk eleman ile yeri değiştirilir.

Çözüm:

1 --> [2|27,16,22,18,6]
2 --> [2,6|16,22,18,27]
3 --> [2,6,16|22,18,27] 
4 --> [2,6,16,18|22,27]

Sonuç --> [2,6,16,18,22,27]

2.Soru: Big-O gösterimini yazınız.

Çözüm:

[n(n+1)]/2 = (n^2+n)/2 'den Big O notation : O(n^2)

3.Soru: Time Complexity --> Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?

Çözüm: Sıralanan diziye bakıldığında aranan 18 elemanı ortada olduğu için Average Case kapsamına girer.

Selection Sort
Soru: [7,3,5,8,2,9,4,15,6] Dizisinin Selection sort'a göre ilk 4 adımını yazınız.

Çözüm:

1 --> [2|3,5,8,7,9,4,15,6]
2 --> [2,3|5,8,7,9,4,15,6] 
3 --> [2,3,4|7,9,5,15,6] 
4 --> [2,3,4,5,7,9,8,15,6]