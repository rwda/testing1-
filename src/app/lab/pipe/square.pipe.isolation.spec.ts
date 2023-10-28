import { SquarePipeForLab } from "./square.pipe";

describe("1-square pipe (isolation) testing:",()=>{
    let SquarePipe: SquarePipeForLab;
    beforeEach(()=>{

        SquarePipe = new SquarePipeForLab();
    })
    it("expect to return 16 when passing 4",()=>{
        expect(SquarePipe.transform(4)).toBe(16);
    })
    it("expect to return 'Not a number' when passing wrong parameter",()=>{
        expect(SquarePipe.transform('aaa')).toBe('Not a number');
    })
})
