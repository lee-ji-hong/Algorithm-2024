class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 2:
            return len(nums)
        
        write_index = 2
        
        for i in range(2, len(nums)):
            if nums [i] != nums [write_index - 2]:
                nums [write_index] = nums [i]
                write_index += 1
                
        return write_index
    
    
            
        