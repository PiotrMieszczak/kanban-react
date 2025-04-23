import { useEffect, useState } from "react";
import { Board } from "../models/board.model";
import { boardDataService } from "../services/board-data.service";
import { BoardAdapter } from "../adapters/board.adapter";
import { BoardDTO } from "@board/dto";

interface GetBoardReturn {
    boards: Board[] | null;
    loading: boolean;
    error: Error | null;
}

export const useGetBoards = (): GetBoardReturn => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [boards, setBoards] = useState<Board[] | null>(null);


    useEffect(() => {
        const fetchBoard = async () => { 
            try {
                const boardsDTO =   await boardDataService.getAllBoards();
                const boards = boardsDTO.map((boardDTO: BoardDTO) => BoardAdapter.createBoard(boardDTO));
                setBoards(boards);
                setLoading(false);
            }
            catch (error) {
                setError(error as Error);
                setLoading(false);
            }
        }

        fetchBoard();
    }, [])

    return {
        boards,
        loading,
        error
    };
};
