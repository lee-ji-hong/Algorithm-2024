class Solution {
    fun solution(progresses: IntArray, speeds: IntArray): IntArray {
        val totalComplete = IntArray(progresses.size)
        for(i in progresses.indices) {
            val remainingWork = 100 - progresses[i]
            totalComplete[i] = Math.ceil(remainingWork / speeds[i].toDouble()).toInt()
        }    
        val result = mutableListOf<Int>()
        var maxDay = totalComplete[0]
        var count = 1
        
        for(i in 1 until totalComplete.size) {
            if(totalComplete[i] < maxDay) {
                count++
            }else {
                result.add(count)
                maxDay = totalComplete[i]
                count = 1
            }
        }
        result.add(count)
        return result.toIntArray()
    }
}