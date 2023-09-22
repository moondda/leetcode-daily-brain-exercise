class Solution:
    def isHappy(self, n: int) -> bool:
        arr = []
        sum = n
        while(sum != 1):
            temp = list(map(int,str(sum)))
            sum = 0
            for i in temp : sum += i*i
            if sum ==1 : return True

            if sum in arr : return False
            else : arr.append(sum)
        
        return True

        



        