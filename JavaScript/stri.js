

// JavaScript program for the above approach

// Function to count characters
// from string A whose removal
// makes the strings A and B equal
function RemoveOneChar(A, B, N, M) {
    // Stores the index of
    // the longest prefix
    var X = 0;

    // Stores the index of
    // the longest suffix
    var Y = N - 1;
    var i;
    // Traverse the string B
    for (i = 0; i < M; i++) {
        if (A[X] != B[i])
            break;
        X++;
    }

    // Traverse the string B
    for (i = M - 1; i >= 0; i--) {
        if (A[Y] != B[i])
            break;
        Y--;
    }
    // If N - M is equal to 1 and Y
    // is less than or equal to X
    if (N - M == 1 && Y < X) {

        // Print the count
        // of characters
        document.write(X - Y + 1 + "<br>");

        // Print the positions
        // of the characters
        for (i = Y; i <= X; i++)
            document.write(i + 1 + " ");
        document.write("\n");
    }

    // Otherwise
    else
        console.log(-1);
}

var A = "abaac";
var B = "abac";
var N = A.length;
var M = B.length;

RemoveOneChar(A, B, N, M);

