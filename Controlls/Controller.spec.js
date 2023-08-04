const mssql = require('mssql');
const notebooks = require('./controllers');

describe("Projects Controller", () => {
    describe("Creating a Notebook", () => {
        it("should create a Notebook successfully", async () => {
            const req = {
                body: {
                    id: '538cf84d-ab46-44e3-b470-596829723334',
                    Title: "Paragraph",
                    Content: "This is A paragraph",
                    CreatedAt: "24/7/2023"
                }
            }
            const res = {
                json: jest.fn(),
            }
            const mockedPool = {
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({
                    rowsAffected: [1]
                })
            }

            jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

            await notebooks.createNotebook(req, res)
            expect(res.json).toHaveBeenCalledWith({
                message: 'Notebook created Successfully',
            })
        }),
            it("should fail to create a Notebook", async () => {
                const req = {
                    body: {
                        id: '538cf84d-ab46-44e3-b470-596829723334',
                        Title: "Paragraph",
                        Content: "This is A paragraph",
                        CreatedAt: "24/7/2023"
                    }
                }
                const res = {
                    json: jest.fn(),
                }
                const mockedPool = {
                    request: jest.fn().mockReturnThis(),
                    input: jest.fn().mockReturnThis(),
                    execute: jest.fn().mockResolvedValue({
                        rowsAffected: [0]
                    })
                }

                jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

                await notebooks.createNotebook(req, res)
                expect(res.json).toHaveBeenCalledWith({
                    message: 'Notebook creation failed',
                })
            })
    })
    describe("Getting all Notebooks", () => {
        it("should get all Notebooks successfully", async () => {
            const req = {
                body: {
                    id: '538cf84d-ab46-44e3-b470-596829723334',
                    Title: "Paragraph",
                    Content: "This is A paragraph",
                    CreatedAt: "24/7/2023"
                }
            }
            const res = {
                json: jest.fn(),
            }
            const mockedPool = {
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({
                    rowsAffected: [1]
                })
            }

            jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

            await notebooks.getNotebooks(req, res)
            expect(res.json).toHaveBeenCalledWith({
                message: 'Notebook created Successfully',
            })
        }),
            it("should fail to get all Notebooks", async () => {
                const req = {
                    body: {
                        id: '538cf84d-ab46-44e3-b470-596829723334',
                        Title: "Paragraph"
                    }
                }
                const res = {
                    json: jest.fn(),
                }
                const mockedPool = {
                    request: jest.fn().mockReturnThis(),
                    input: jest.fn().mockReturnThis(),
                    execute: jest.fn().mockResolvedValue({
                        rowsAffected: [0]
                    })
                }

                jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

                await notebooks.getNotebooks(req, res)
                expect(res.json).toHaveBeenCalledWith({
                    message: 'Notebook creation failed',
                })
            })
    })
    describe("Getting a single Notebook", () => {
        it("should get a single Notebook successfully", async () => {
            const req = {
                body: {
                    id: '538cf84d-ab46-44e3-b470-596829723334',
                    Title: "Paragraph",
                    Content: "This is A paragraph",
                    CreatedAt: "24/7/2023"
                }
            }
            const res = {
                json: jest.fn(),
            }
            const mockedPool = {
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({
                    rowsAffected: [1]
                })
            }

            jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

            await notebooks.getSingleNotebook(req, res)
            expect(res.json).toHaveBeenCalledWith({
                message: 'Notebook created Successfully',
            })
        }),
            it("should fail to get a single Notebook", async () => {
                const req = {
                    body: {
                        id: '538cf84d-ab46-44e3-b470-596829723334',
                        Title: "Paragraph"
                    }
                }
                const res = {
                    json: jest.fn(),
                }
                const mockedPool = {
                    request: jest.fn().mockReturnThis(),
                    input: jest.fn().mockReturnThis(),
                    execute: jest.fn().mockResolvedValue({
                        rowsAffected: [0]
                    })
                }

                jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

                await notebooks.getSingleNotebook(req, res)
                expect(res.json).toHaveBeenCalledWith({
                    message: 'Notebook creation failed',
                })
            })
    })
    describe("Updating a Notebook", () => {
        it("should update a Notebook successfully", async () => {
            const req = {
                body: {
                    id: '538cf84d-ab46-44e3-b470-596829723334',
                    Title: "Paragraph",
                    Content: "This is A paragraph",
                    CreatedAt: "24/7/2023"
                }
            }
            const res = {
                json: jest.fn(),
            }
            const mockedPool = {
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({
                    rowsAffected: [1]
                })
            }

            jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

            await notebooks.updateNotebook(req, res)
            expect(res.json).toHaveBeenCalledWith({
                message: 'Notebook created Successfully',
            })
        }),
            it("should fail to update a Notebook", async () => {
                const req = {
                    body: {
                        id: '538cf84d-ab46-44e3-b470-596829723334',
                        Title: "Paragraph"
                    }
                }
                const res = {
                    json: jest.fn(),
                }
                const mockedPool = {
                    request: jest.fn().mockReturnThis(),
                    input: jest.fn().mockReturnThis(),
                    execute: jest.fn().mockResolvedValue({
                        rowsAffected: [0]
                    })
                }

                jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

                await notebooks.updateNotebook(req, res)
                expect(res.json).toHaveBeenCalledWith({
                    message: 'Notebook creation failed',
                })
            })
    })
    describe("Deleting a Notebook", () => {
        it("should delete a Notebook successfully", async () => {
            const req = {
                body: {
                    id: '538cf84d-ab46-44e3-b470-596829723334',
                    Title: "Paragraph",
                    Content: "This is A paragraph",
                    CreatedAt: "24/7/2023"
                }
            }
            const res = {
                json: jest.fn(),
            }
            const mockedPool = {
                request: jest.fn().mockReturnThis(),
                input: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({
                    rowsAffected: [1]
                })
            }

            jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

            await notebooks.deleteNotebook(req, res)
            expect(res.json).toHaveBeenCalledWith({
                message: 'Notebook created Successfully',
            })
        }),
            it("should fail to delete a Notebook", async () => {
                const req = {
                    body: {
                        id: '538cf84d-ab46-44e3-b470-596829723334',
                        Title: "Paragraph"
                    }
                }
                const res = {
                    json: jest.fn(),
                }
                const mockedPool = {
                    request: jest.fn().mockReturnThis(),
                    input: jest.fn().mockReturnThis(),
                    execute: jest.fn().mockResolvedValue({
                        rowsAffected: [0]
                    })
                }

                jest.spyOn(mssql, 'connect').mockResolvedValue(mockedPool)

                await notebooks.deleteNotebook(req, res)
                expect(res.json).toHaveBeenCalledWith({
                    message: 'Notebook creation failed',
                })
            })
    })
})

