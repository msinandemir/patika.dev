## Binary Search Tree
## 1.Soru: [7,5,1,8,3,6,0,9,4,2] Dizinin Binary Search Tree aşamalarını yazınız.

Binary Search Tree de ağacın sol tarafına küçük, sağ tarafına ise büyük elemanlar yazılarak ilerlenir.

Root => 8 olara kabul edelim.

# CEVAP:

## 1 --> 8 > 7 => 7 , 8'in soluna

## 2 --> 8 > 5 && 5 < 7 => 5 , 7'in soluna

## 3 --> 8 > 1 && 1 < 5 => 1, 5'in soluna

## 4 --> 8 > 3 => 3 , 8'in soluna

## 5 --> 8 > 6 && 6 > 3 && 5 < 6 => 5 , 1'in sağına

## 6 --> 8 > 0 && 6 < 0 => 0 , 6'nın soluna

## 7 --> 8 <9 => 9 , 8'in sağına

## 8 --> 8 < 4 && 5 > 4 => 1 < 4 && 3 < 4 => 4, 3'ün sağına 

## 9 --> 8 > 2 && 5 > 2 && 1 < 2 && 3 < 2 => 2 , 3'ün soluna
