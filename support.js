//��ȡָ��top����ֵ
function getPosTop(i, j) {
    return 20 + i * 120;
}
//��ȡָ��left����ֵ
function getPosLeft(i, j) {
    return 20 + j * 120;
}
//������ʽ
function getNumberBackgroundColor(number) {
    switch (number) {
        case 2:
            return '#eee4de';
            break;
        case 4:
            return '#ede0c8';
            break;
        case 8:
            return '#f2b179';
            break;
        case 16:
            return '#f59563';
            break;
        case 32:
            return '#f67c5f';
            break;
        case 64:
            return '#f65e3b';
            break;
        case 128:
            return '#edcf72';
            break;
        case 256:
            return '#edcc61';
            break;
        case 512:
            return '#9c0';
            break;
        case 1024:
            return '#33b5e5';
            break;
        case 2048:
            return '#09c';
            break;
    }
    return "black";
}
//��ȡ�ƶ���ĸ��ɫ
function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65";
    }
    return "white";
}
//�ж�ʮ�������Ƿ��п�λ
function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
//�ж��ܷ������ƶ�
function canMoveUp(board) {
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
//�ж��Ƿ��ܹ������ƶ�
function canMoveDown(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
//�ж��Ƿ��ܹ������ƶ�
function canMoveLeft(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                if (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
//�ж��Ƿ��ܹ������ƶ�
function canMoveRight(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] != 0) {
                if (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j]) {
                    return true;
                }
            }
        }
    }
    return false;
}
//�ж�ˮƽ�Ƿ����ϰ���
function noBlockHorizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return false;
        }
    }
    return true;
}
//�жϴ�ֱ�����Ƿ����ϰ���
function noBlockVertical(col, row1, row2, board) {
    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0) {
            return false;
        }
    }
    return true;
}
